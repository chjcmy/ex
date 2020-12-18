package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"net/http"
)

var db *sql.DB
var connectionError error

func init() {
	db, connectionError = sql.Open("mysql", "root:1234@/mydb")
	if connectionError != nil {
		log.Fatal("error connectiong to database :: ", connectionError)
	}
}
func getCurrentDb(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT DATABASE() as db")
	if err != nil {
		log.Print("error executing query :: ", err)
		return
	}
	var db string
	for rows.Next() {
		rows.Scan(&db)
	}
	fmt.Fprintf(w, "Current Database is :: %s", db)
}
func main() {
	http.HandleFunc("/", getCurrentDb)
	defer db.Close()
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("error starting http server : ", err)
		return
	}
}
