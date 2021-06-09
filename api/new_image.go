package api

import (
	"gee/db"
	"gee/gee"
	"github.com/gohouse/gorose/v2"
)

type anli gorose.Map

func GetAnliList(g *gee.Context) {
	res2, _ := db.DB().Table("wxr_anli").Limit(10).Get()
	g.Json(200, res2)
}

func GetSeo(g *gee.Context) {
	res2, _ := db.DB().Table("wxr_seo_anli").First()
	g.Json(200, res2)
}

func GetSeoNews(g *gee.Context) {
	res2, _ := db.DB().Table("wxr_seo_news").Limit(10).Get()
	g.Json(200, res2)
}
