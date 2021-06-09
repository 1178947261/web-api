package api

import (
	"gee/db"
	"gee/gee"
	"github.com/gohouse/gorose/v2"
	"net/http"
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
	g.HTML(http.StatusOK, "arr.html", gee.H{
		"title":  "gee",
		"stuArr": res2,
	})
}

func GetIndex(g *gee.Context) {
	g.HTML(http.StatusOK, "index.html", nil)
}

func GetCaseImg(g *gee.Context) {
	g.HTML(http.StatusOK, "case-img.html", nil)
}

func GetCaseImgList(g *gee.Context) {
	g.HTML(http.StatusOK, "case-img-list.html", nil)
}

func GetCaseVideo(g *gee.Context) {

	g.HTML(http.StatusOK, "case-video.html", nil)
}

func GetContact(g *gee.Context) {
	g.HTML(http.StatusOK, "contact.html", nil)

}

func GetNews(g *gee.Context) {

	g.HTML(http.StatusOK, "news.html", nil)
}

func GetList(g *gee.Context) {

}

func GetProduct(g *gee.Context) {

	g.HTML(http.StatusOK, "product.html", nil)
}

func GetProductList(g *gee.Context) {

	g.HTML(http.StatusOK, "product-list.html", nil)
}

func GetQuestion(g *gee.Context) {

	g.HTML(http.StatusOK, "question.html", nil)
}

func GetAbout(g *gee.Context) {

	g.HTML(http.StatusOK, "about.html", nil)
}
