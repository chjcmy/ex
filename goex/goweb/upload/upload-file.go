package main

import (
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
)

func fileHandler(w http.ResponseWriter, r *http.Request) {
	file, header, err := r.FormFile("file")
	if err != nil {
		log.Printf("error getting a file for the provided form key : ", err)
		return
	}
	defer file.Close()
	out, pathError := os.Create("C:\\Users\\chjcm\\Desktop\\9781787286740_Code\\GoWebDevelopmentCookbook\\Chapter03\\templates\\hellow" + header.Filename)
	if pathError != nil {
		log.Printf("error creating a file for writing :", pathError)
		return
	}
	defer file.Close()
	_, copyFileError := io.Copy(out, file)
	if copyFileError != nil {
		log.Printf("error occurred while file copy : ", copyFileError)
	}
	fmt.Fprintf(w, "File uploaded successfully : "+header.Filename)
}
func index(w http.ResponseWriter, r *http.Request) {
	parsedTemplate, _ := template.ParseFiles("./goweb/upload/assets/upload-file.assets")
	parsedTemplate.Execute(w, nil)
}
func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/upload", fileHandler)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("error starting http server : ", err)
		return
	}
}
