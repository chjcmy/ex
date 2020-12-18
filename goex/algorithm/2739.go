package main

import "fmt"

func main() {
	var a int
	fmt.Scan(&a)
	for i := 1; i < 10; i++ {
		fmt.Printf("%d * %d = %d", a, i, a*i)
		fmt.Println()
	}
}
