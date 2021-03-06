package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

type Route struct {
	Name       string
	Method     string
	Pattern    string
	HandleFunc http.HandlerFunc
}
type Routes []Route

var routes = Routes{
	Route{
		"getEmployees",
		"GET",
		"/employees",
		getEmployees,
	},
	Route{
		"addEmployee",
		"POST",
		"/employee/add",
		addEmployee,
	},
}

type Employee struct {
	Id        string `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}
type Employees []Employee

var employees []Employee

func init() {
	employees = Employees{
		Employee{Id: "1", FirstName: "sunghyeon", LastName: "Chi"},
		Employee{Id: "2", FirstName: "wonjin", LastName: "park"},
	}
}
func getEmployees(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(employees)
}
func addEmployee(w http.ResponseWriter, r *http.Request) {
	employee := Employee{}
	err := json.NewDecoder(r.Body).Decode(&employee)
	if err != nil {
		log.Print("error occurred while decoding employee data : ", err)
		return
	}
	log.Printf("adding employee id  : %s with firstName as : %s and lastName as : %s ", employee.Id, employee.FirstName, employee.LastName)
	employees = append(employees, Employee{Id: employee.Id, FirstName: employee.FirstName, LastName: employee.LastName})
	json.NewEncoder(w).Encode(employees)
}
func AddRoutes(router *mux.Router) *mux.Router {
	for _, route := range routes {
		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandleFunc)
	}
	return router
}
func main() {
	muxRouter := mux.NewRouter().StrictSlash(true)
	router := AddRoutes(muxRouter)
	path, _ := os.Getwd()
	println(path)
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./goweb/vuejs/assets/")))
	err := http.ListenAndServe(":8080", router)
	if err != nil {
		log.Fatal("error starting http server : ", err)
		return
	}
}
