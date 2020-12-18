package main

import (
	"html/template"
	"log"
	"net/http"
)

type Person struct {
	Id   string
	Name string
}

func renderTemplate(w http.ResponseWriter, r *http.Request) {
	person := Person{Id: "1", Name: "Foo"}
	parsedTemplate, _ := template.ParseFiles("./goweb/template/templates/first-template.html")
	err := parsedTemplate.Execute(w, person)
	if err != nil {
		log.Print("Error occurred while executing the template or writing its output : ", err)
		return
	}
}

func main() {
	http.HandleFunc("/", renderTemplate)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("error starting http server : ", err)
		return
	}
}
