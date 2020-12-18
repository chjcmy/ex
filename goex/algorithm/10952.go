package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {

	var a, b int

	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)
	defer w.Flush()

	for {
		fmt.Fscan(r, &a, &b)
		if a == 0 && b == 0 {
			break
		} else {
			fmt.Fprintln(w, a+b)
		}
	}
}
