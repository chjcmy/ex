package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

var sc = bufio.NewScanner(os.Stdin)
var wr = bufio.NewWriter(os.Stdout)

func main() {
	sc.Split(bufio.ScanWords)

	defer wr.Flush()
	n := scanInt()

	var maxn, minn = -987654321, 987654321

	for i := 0; i < n; i++ {
		t := scanInt()
		if maxn < t {
			maxn = t
		}
		if minn > t {
			minn = t
		}
	}
	fmt.Fprintln(wr, minn, maxn)

}
func scanInt() int {
	sc.Scan()
	x, _ := strconv.Atoi(sc.Text())
	return x
}
