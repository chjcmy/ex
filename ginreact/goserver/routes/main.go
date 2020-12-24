package routes

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

var (
	router = gin.Default()
)

// Run will start the server
func Run() {
	getRoutes()
	router.Run(":8080")
}

var db = make(map[string]string)

// getRoutes will create our routes of our entire application
// this way every group of routes can be defined in their own file
// so this one won't be so messy
func getRoutes() {

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, "users")
	})

	v1 := router.Group("/v1")
	addUserRoutes(v1)
	addPingRoutes(v1)

	v2 := router.Group("/v2")
	addPingRoutes(v2)
}
