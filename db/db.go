package db

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/gohouse/gorose/v2"
)

var err error
var Engines *gorose.Engin

func Init() {
	// 全局初始化数据库,并复用
	// 这里的engin需要全局保存,可以用全局变量,也可以用单例
	// 配置&gorose.Config{}是单一数据库配置
	// 如果配置读写分离集群,则使用&gorose.ConfigCluster{}
	Engines, err = gorose.Open(&gorose.Config{Driver: "mysql", Dsn: "root:123456@tcp(localhost:3306)/cheche?charset=utf8mb4&parseTime=true"})
	// mysql示例, 记得导入mysql驱动 github.com/go-sql-driver/mysql
	// engin, err = gorose.Open(&gorose.Config{Driver: "mysql", Dsn: "root:root@tcp(localhost:3306)/test?charset=utf8mb4&parseTime=true"})
}

func DB() gorose.IOrm {
	return Engines.NewOrm()
}
