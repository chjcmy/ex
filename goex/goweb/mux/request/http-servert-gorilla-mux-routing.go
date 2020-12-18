package main

import (
	"fmt"
	"github.com/gorilla/handlers"
	"log"
	"net/http"
)

const (
	CONN_HOST = "localhost"
	CONN_PORT = "8080"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "HELLO World!")
}
func login(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "login in!")
}
func logout(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "login out!")
}
func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", helloWorld)
	err := http.ListenAndServe(CONN_HOST+":"+CONN_PORT, handlers.CompressHandler(mux))
	if err != nil {
		log.Fatal("error starting http sever : ", err)
		return
	}
}
