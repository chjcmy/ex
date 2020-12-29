package main

import "C"
import (
	"database/sql"
	"fmt"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"net/http"
)

type Test struct {
	ID      int    `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
}

func main() {

	router := gin.Default()

	router.Use(CORSMiddleware())
	router.Use(static.Serve("/", static.LocalFile("./client/build", true)))

	//router.GET("/", func(c *gin.Context) {
	//	c.HTML(http.StatusOK, "./client/build/index","")
	//})
	router.GET("/gogin", func(c *gin.Context) {

		db, err := sql.Open("mysql", "cshcmi:chltjdgus123!@tcp(192.168.0.9:3306)/exam")

		var (
			test  Test
			tests []Test
		)

		rows, err := db.Query("SELECT id ,title, content FROM tests")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close() //반드시 닫는다 (지연하여 닫기)

		for rows.Next() {

			err = rows.Scan(&test.ID, &test.Title, &test.Content)
			tests = append(tests, test)
		}
		defer rows.Close()
		c.JSON(http.StatusOK, gin.H{
			"result": tests,
			"count":  len(tests),
		})
	})

	router.POST("/createList", func(c *gin.Context) {

		first_name := c.PostForm("title")
		last_name := c.PostForm("content")

		db, err := sql.Open("mysql", "cshcmi:chltjdgus123!@tcp(192.168.0.9:3306)/exam")

		result, err := db.Exec("INSERT INTO tests(title, content) VALUES (?, ?)", first_name, last_name)
		if err != nil {
			log.Fatal(err)
		}

		// sql.Result.RowsAffected() 체크
		n, err := result.RowsAffected()
		if n == 1 {
			fmt.Println("1 row inserted.")
		}
	})

	router.DELETE("/deleteList/:id", func(c *gin.Context) {

		var id = c.Param("id")
		db, err := sql.Open("mysql", "cshcmi:chltjdgus123!@tcp(192.168.0.9:3306)/exam")

		result, err := db.Exec("DELETE FROM tests WHERE id = (?)", id)
		if err != nil {
			log.Fatal(err)
		}

		// sql.Result.RowsAffected() 체크
		n, err := result.RowsAffected()
		if n == 1 {
			fmt.Println(id + " row delete.")
		}
	})

type updateList struct {
	Id int32 `json:"Id" binding:"required"`
	NewContent string `json:"NewContent" binding:"required"`
	}


	router.PUT("/updateList", func(c *gin.Context) {

		var json updateList
		c.ShouldBindJSON(&json);
		db, err := sql.Open("mysql", "cshcmi:chltjdgus123!@tcp(192.168.0.9:3306)/exam")

		result, err := db.Exec("update tests set content = (?) WHERE id = (?)", json.NewContent, json.Id)
		if err != nil {
			log.Fatal(err)
		}

		// sql.Result.RowsAffected() 체크
		n, err := result.RowsAffected()
		if n == 1 {
			fmt.Println(" row update." )
		}
	})

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}

	// Start and run the server
	router.Run(":80")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
	}
}
