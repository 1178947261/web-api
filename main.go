package main

import (
	"fmt"
	"gee/api"
	"gee/db"
	"gee/gee"
	"html/template"
	"log"
	"net/http"
	"time"
)

type student struct {
	Name string
	Age  int8
}

func FormatAsDate(t time.Time) string {
	year, month, day := t.Date()
	return fmt.Sprintf("%d-%02d-%02d", year, month, day)
}

func main() {
	r := gee.New()
	db.Init()
	r.Use(gee.Logger())
	r.SetFuncMap(template.FuncMap{
		"FormatAsDate": FormatAsDate,
	})
	r.Use(gee.Cors())
	r.LoadHTMLGlob("templates/*")
	r.Static("/assets", "./static")
	stu1 := &student{Name: "Geektutu", Age: 20}
	stu2 := &student{Name: "Jack", Age: 22}
	r.GET("/index/index.html", api.GetIndex)
	r.GET("/about/about.html", api.GetAbout)
	r.GET("/product/product.html", api.GetProduct)
	r.GET("/product/product-list.html", api.GetProductList)

	r.GET("/anli/case-img.html", api.GetCaseImg)
	r.GET("/anli/case-img-list.html", api.GetCaseImgList)
	r.GET("/news/news.html", api.GetNews)
	r.GET("/contact/contact.html", api.GetContact)

	r.GET("/video/case-video.html", api.GetCaseVideo)

	r.GET("/question/question.html", api.GetQuestion)

	r.GET("/anli", api.GetAnliList)
	r.GET("/", func(c *gee.Context) {
		c.HTML(http.StatusOK, "css.tmpl", nil)
	})
	r.GET("/students,html", func(c *gee.Context) {
		c.HTML(http.StatusOK, "arr.html", gee.H{
			"title":  "gee",
			"stuArr": [2]*student{stu1, stu2},
		})
	})

	r.GET("/date", func(c *gee.Context) {
		c.HTML(http.StatusOK, "custom_func.tmpl", gee.H{
			"title": "gee",
			"now":   time.Date(2019, 8, 17, 0, 0, 0, 0, time.UTC),
		})
	})

	r.Run(":9999")
}
func onlyForV2() gee.HandlerFunc {
	return func(c *gee.Context) {
		// Start timer
		t := time.Now()
		// if a server error occurred
		c.Fail(500, "Internal Server Error")
		// Calculate resolution time
		log.Printf("[%d] %s in %v for group v2", c.StatusCode, c.Req.RequestURI, time.Since(t))
	}
}
