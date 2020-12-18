package main

import (
	"fmt"
	"github.com/asaskevich/govalidator"
	"github.com/gorilla/schema"
	"html/template"
	"log"
	"net/http"
)

const (
	USERNAME_ERROR_MESSAGE = "Please enter a valid Username"
	PASSWORD_ERROR_MESSAGE = "Please enter a valid Password"
	GENERIC_ERROR_MESSAGE  = "Validation Error"
)

type User struct {
	Username string `valid:"alpha,required"`
	Password string `valid:"alpha,required"`
}

func readForm(r *http.Request) *User {
	r.ParseForm()
	user := new(User)
	decoder := schema.NewDecoder()
	decodeErr := decoder.Decode(user, r.PostForm)
	if decodeErr != nil {
		log.Printf("error mapping parsed form data to struct : ", decodeErr)
	}
	return user
}
func validateUser(w http.ResponseWriter, r *http.Request, user *User) (bool, string) {
	valid, validationError := govalidator.ValidateStruct(user)
	if !valid {
		usernameError := govalidator.ErrorByField(validationError, "Username")
		passwordError := govalidator.ErrorByField(validationError, "Password")
		if usernameError != "" {
			log.Printf("username validation error : ", usernameError)
			return valid, USERNAME_ERROR_MESSAGE
		}
		if passwordError != "" {
			log.Printf("password validation error : ", passwordError)
			return valid, PASSWORD_ERROR_MESSAGE
		}
	}
	return valid, GENERIC_ERROR_MESSAGE
}
func login(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		parsedTemplate, _ := template.ParseFiles("./goweb/login/html/login-form.html")
		parsedTemplate.Execute(w, nil)
	} else {
		user := readForm(r)
		valid, validationErrorMessage := validateUser(w, r, user)
		if !valid {
			fmt.Fprintf(w, validationErrorMessage)
			return
		}
		fmt.Fprintf(w, "Hello "+user.Username+"!")
	}
}

func main() {
	http.HandleFunc("/", login)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("error starting http server : ", err)
		return
	}
}
