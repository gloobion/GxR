//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 32; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_"; //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/comics"; //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png"; //file extension of thumbnails
const thumbDefault = "default"; //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png"; //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Chapter 0 - Page 1", //the title of the page (leaving this blank will default it to "Page X")
        imageFiles: 1, //how many image files this page is split into
   
    }, 
    {
        pgNum: 2,
        title: "Chapter 0 - Page 2", 
        imageFiles: 1, 
   
    },
    {
        pgNum: 3, 
        title: "Chapter 0 - Page 3", 
        imageFiles: 1, 
   
    },
    {
        pgNum: 4, //what page number it is
        title: "Chapter 0 - Page 4",
        imageFiles: 1, 
   
    },
     {
        pgNum: 5, //what page number it is
        title: "Chapter 0 - Page 5",
        imageFiles: 1, 
   
    },
     {
        pgNum: 6, //what page number it is
        title: "Chapter 0 - Page 6",
        imageFiles: 1, 
   
    },
    {
        pgNum: 7, //what page number it is
        title: "Chapter 0 - Page 7",
        imageFiles: 1, 
   
    },
    {
        pgNum: 8, //what page number it is
        title: "Chapter 0 - Page 8",
        imageFiles: 1, 
   
    },
        {
        pgNum: 9, //what page number it is
        title: "Chapter 0 - Page 9",
        imageFiles: 1, 
   
    },
        {
        pgNum: 10, //what page number it is
        title: "Chapter 0 - Page 10",
        imageFiles: 1, 
   
    },
        {
        pgNum: 11, //what page number it is
        title: "Chapter 0 - Page 11",
        imageFiles: 1, 
   
    },
    
        {
        pgNum: 12, //what page number it is
        title: "Chapter 0 - Page 12",
        imageFiles: 1, 
   
    },
           {
        pgNum: 13, //what page number it is
        title: "Chapter 0 - Page 13",
        imageFiles: 1, 
   
    },
            {
        pgNum: 14, //what page number it is
        title: "Chapter 0 - Page 14",
        imageFiles: 1, 
   
    },
            {
        pgNum: 15, //what page number it is
        title: "Chapter 0 - Page 15",
        imageFiles: 1, 
   
    },
        {
        pgNum: 16, //what page number it is
        title: "Chapter 1 - Page 1",
        imageFiles: 1, 
   
    },
      {
        pgNum: 17, //what page number it is
        title: "Chapter 1 - Page 2",
        imageFiles: 1, 
   
    },
      {
        pgNum: 18, //what page number it is
        title: "Chapter 1 - Page 3",
        imageFiles: 1, 
   
    },
      {
        pgNum: 19, //what page number it is
        title: "Chapter 1 - Page 4",
        imageFiles: 1, 
   
    },
     {
        pgNum: 20, //what page number it is
        title: "Chapter 1 - Page 5",
        imageFiles: 1, 
   
    },
     {
        pgNum: 21, //what page number it is
        title: "Chapter 1 - Page 6",
        imageFiles: 1, 
   
    },
     {
        pgNum: 22, //what page number it is
        title: "Chapter 1 - Page 7",
        imageFiles: 1, 
   
    },
     {
        pgNum: 23, //what page number it is
        title: "Chapter 1 - Page 8",
        imageFiles: 1, 
   
    },
     {
        pgNum: 24, //what page number it is
        title: "Chapter 1 - Page 9",
        imageFiles: 1, 
   
    },
     {
        pgNum: 25, //what page number it is
        title: "Chapter 1 - Page 10",
        imageFiles: 1, 
   
    },
     {
        pgNum: 26, //what page number it is
        title: "Chapter 1 - Page 11",
        imageFiles: 1, 
   
    },
     {
        pgNum: 27, //what page number it is
        title: "Chapter 1 - Page 12",
        imageFiles: 1, 
   
    },
 {
        pgNum: 28, //what page number it is
        title: "Chapter 1 - Page 13", //the title of the page (leaving this blank will default it to "Page X")
        imageFiles: 1, //how many image files this page is split into
   
    }, 
 {
        pgNum: 29, //what page number it is
        title: "Chapter 1 - Page 14", //the title of the page (leaving this blank will default it to "Page X")
        imageFiles: 1, //how many image files this page is split into
   
    }, 
 {
        pgNum: 30, //what page number it is
        title: "Chapter 1 - Page 15", //the title of the page (leaving this blank will default it to "Page X")
        imageFiles: 1, //how many image files this page is split into
   
    }, 
 {
        pgNum: 31, //what page number it is
        title: "Chapter 1 - Page 16", //the title of the page (leaving this blank will default it to "Page X")
        imageFiles: 1, //how many image files this page is split into
   
    }, 
 {
        pgNum: 32, //what page number it is
        title: "Chapter 1 - Page 17", //the title of the page (leaving this blank will default it to "Page X")
        imageFiles: 1, //how many image files this page is split into
   
    }, 
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
