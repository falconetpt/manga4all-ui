import React from "react";

export default class MangaReader extends React.Component {
    render() {
        let images = [
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/1.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/2.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/3.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/4.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/5.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/6.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/7.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/8.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/9.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/10.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/11.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/12.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/13.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/14.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/15.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/16.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/17.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/18.jpg",
            "https://s8.mkklcdnv8.com/mangakakalot/k1/kimetsu_no_yaiba/chapter_194_scorching_wounds/19.jpg"
        ];

        const imageStyle = {
            width: "90%",
            height: "100%"
        };

        return (
            <div style={{textAlign: "center", backgroundColor: "black"}}>
                {
                    images.map(img =>
                        <div key={img}>
                            <img src={img} style={imageStyle}/>
                            {/*<hr/>*/}
                            {/*<br/>*/}
                        </div>
                    )
                }
            </div>
        );
    }
}
