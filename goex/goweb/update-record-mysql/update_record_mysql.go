package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

var db *sql.DB
var connectionError error

func init() {
	db, connectionError = sql.Open("mysql", "root:1234@/mydb")
	if connectionError != nil {
		log.Fatal("error connectiong to database : ", connectionError)
	}
}

type Employee struct {
	Id   int    `json:"uid"`
	Name string `json:"name"`
}

func updateRecords(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	vals := r.URL.Query()
	name, ok := vals["name"]

	if ok {
		log.Print("going to update record in database for id :: ", id)
		stmt, err := db.Prepare("UPDATE employee SET name=? where uid=?")
		if err != nil {
			log.Print("error occurred while preparing query :: ", err)
			return
		}
		result, err := stmt.Exec(name[0], id)
		if err != nil {
			log.Print("error occurred while executing query :: ", err)
			return
		}
		rowsAffected, err := result.RowsAffected()
		fmt.Fprintf(w, "Number of rows updated in database are :: %d", rowsAffected)
	} else {
		fmt.Fprintf(w, "Error occurred while updating record in database for id :: %s", id)
	}
}
func main() {
	router := mux.NewRouter()
	router.HandleFunc("/employees/update/{id}", updateRecords).Methods("PUT")
	defer db.Close()
	err := http.ListenAndServe(":8080", router)
	if err != nil {
		log.Fatal("error starting http server : ", err)
		return
	}
}
