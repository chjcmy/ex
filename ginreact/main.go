package main

import (
	"database/sql"
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
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	//router.Use(static.Serve("/", static.LocalFile("./client/build", true)))

	router.Use(CORSMiddleware())

	router.GET("/gogin", func(c *gin.Context) {

		//first_name := c.PostForm("firstname")
		//last_name := c.PostForm("lastname")

		db, err := sql.Open("mysql", "cshcmi:chltjdgus123!@tcp(192.168.0.9:3306)/exam")
		//
		//result, err := db.Exec("INSERT INTO tests(title, content) VALUES (?, ?)", "first_name", "last_name")
		//if err != nil {
		//	log.Fatal(err)
		//}
		//
		//// sql.Result.RowsAffected() 체크
		//n, err := result.RowsAffected()
		//if n == 1 {
		//	fmt.Println("1 row inserted.")
		//}

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
	router.Run(":8080")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "access-control-allow-origin")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
	}
}
