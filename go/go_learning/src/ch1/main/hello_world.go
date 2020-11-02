package main // 包 主包 node：module模块化

import (
	"fmt"
	"os"
)//内置库

func main() {
	if len(os.Args) > 1 {
		fmt.Println(os.Args[1])
	}
	
	fmt.Println("hello world!")}

