@import url('https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700|Exo:100,200,300,400,500,600,700');

/*--------------------------------------------Colors*/

.bg-color-name-title {
    background-color: #676767;
}

.bg-color-three-reasons {
    background-color: #fff;
}

.bg-color-personal-info {
    background-color: #f4f4f4;
}

.bg-color-work-history {
    background-color: #9b59b6;
}

.ui-menu-color-home {
    background-color: #e67e22;
}

.ui-menu-color-resume {
    background-color: #9b59b6;
}

.ui-menu-color-contact {
    background-color: #3498db;
}

.ui-menu-color-download {
    background-color: #525252;
}

.row-table {
    display: table;
}

.section-column {
    display: table-cell;
    padding: 0 30px 30px;
    float: none;
}

.section-heading {
    font-family: "Exo", sans-serif;
    font-weight: 300;
    margin-top: 25px;
    margin-bottom: 40px;
}

/* ----------------------------------------Special paddings/margins/text */

h1,
h2,
h3,
h4 {
    margin: 0;
}

.uppercase {
    text-transform: uppercase;
}

.general-sub {
    font-family: "Exo", sans-serif;
    font-weight: 300;
    color: #fafafa;
}

.inline-block {
    display: inline-block;
}

.row-table {
    display: table;
}

.section-column {
    display: table-cell;
    padding: 0 30px 30px;
    float: none;
}

.history-heading,
.section-heading {
    font-family: "Exo", sans-serif;
    font-weight: 300;
    margin-top: 25px;
    margin-bottom: 40px;
}

/*--------------------------------------------Heading*/

header {
    margin: 0;
}

.heading {
    margin-left: 50px;
}

.logo {
    background: url("../images/rosie.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 360px;
    transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
}

.name {
    font-family: "Exo", sans-serif;
    font-weight: 100;
    font-size: 46px;
    margin-top: 50px;
    color: #fff;
}

.title {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 90px;
    color: #fff;
}

.list-inline-item:not(:last-child) {
    margin: 0;
}

.menucontainer {
    font-size: 0;
}

#nav li {
    font-size: 14px;
    padding: 0;
}

#nav {
    margin: 0;
}

.menuitem {
    height: 120px;
    text-align: center;
    padding: 0;
}

.menuitem a {
    width: 100%;
    text-decoration: none;
    color: #fff;
    height: 120px;
}

.menuitem a i {
    padding-top: 22px;
    display: block;
    color: #fafafa;
    font-size: 26px;
}

.menuitem span {
    display: block;
    width: 100%;
    padding-top: 5px;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 2px;
}

/*--------------------------------------------Hover.css*/

.hvr-sweep-to-bottom:before {
    background: rgba(0, 0, 0, 0.2);
    height: 120px;
}

/* ----------------------------------------Footer */

footer {
    background-color: #525252;
    color: #fafafa;
    min-height: 120px;
    margin: 0;
}

.cv-pdf i {
    font-size: 18px;
    color: #fafafa;
    text-align: center;
    padding-left: 5px;
    transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -webkit-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
}

.cv-pdf i:hover {
    color: #e84610;
}

.social-links {
    padding-bottom: 15px;
}

.social-links li a i {
    width: 32px;
    height: 32px;
    padding: 12px 0;
    border-radius: 50%;
    font-size: 13px;
    line-height: 7px;
    text-align: center;
    color: #fafafa;
    background: #8f8f8f;
    transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -webkit-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
}

.social-links li a i:hover {
    background: #e84610;
}

#footer-details {
    padding: 20px;
}

/* ----------------------------------------Three Reasons */

.three-reasons-icon {
    font-size: 26px;
    color: #e67e22;
}

.three-reasons-heading {
    margin-bottom: 15px;
}

/* ----------------------------------------Personal Info */

.personal-info-item {
    margin-bottom: 20px;
    display: block;
    clear: both;
}

.personal-info-item .key,
.personal-info-item .value {
    padding-right: 8px;
    display: inline-block;
}

.personal-info-item .key p,
.personal-info-item .value p {
    margin: 0;
}

.personal-info-item .key {
    width: 30%;
    margin-right: 21px;
    padding-top: 2px;
    vertical-align: top;
}

.personal-info-item .key p {
    font-weight: 700;
}

.personal-info-item .value {
    position: relative;
    width: 60%;
}

/* ----------------------------------------Skills */

.progress {
    position: relative;
    height: 25px;
    margin-bottom: 4px;
}

.progress-type {
    position: absolute;
    left: 0px;
    font-weight: 400;
    padding: 3px 30px 2px 10px;
    color: #fafafa;
    background-color: rgba(25, 25, 25, 0.2);
}

.progress-section {
    margin: 40px 20px;
}

/* ----------------------------------------Work History */

.history-heading {
    color: #fafafa;
    margin-bottom: 50px;
}

.timeline-item {
    padding: 4em 2em 0em 2em;
    position: relative;
    color: #fafafa;
    border-left: 1px solid;
}

.timeline-item p {
    padding: 0;
    margin: 0;
}

.timeline-item:before {
    content: attr(data-dates);
    position: absolute;
    left: 2.5em;
    top: 3em;
    display: block;
    font-family: "Exo", sans-serif;
    font-weight: 500;
    font-size: 0.8em;
    padding: 0;
    margin: 0;
}

.timeline-item:after {
    width: 12px;
    height: 12px;
    display: block;
    top: 2.4em;
    position: absolute;
    left: -6px;
    border-radius: 12px;
    content: '';
    background: #fafafa;
}

.history-items {
    margin-bottom: 30px;
}