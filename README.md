# Filmlabproductions

[View my live webpage](https://filmlabproductions.co.uk)
[View my github pages](https://github.com/Armandoh4/filmlabproductions)


![Home](assets/readme_img/home.png)

Filmlab Productions (Filmlab) is a film production website where Filmlab is able to post content to viewers directly. The site is used as a video streaming platform, also aiding audiences to stay up to date on what Filmlab is doing. Users may stay up to date via the homepage, which houses a up to date film list, and a behind the scenes page.

Filmlab is a small company so it is vital that they are able to quickly show what they are about, and their films must come to the focus to build an audience. Therefore a thoughtful design would take into consideration, the companies appitite for releasing films, along with the viewers attention to watching them.

In order to accomplish this goal, Filmlab consists of 7 pages:

    - Home
    - Films
        - Kidnapped (Film)
        - Once Upon a Time (Film)
        - Killer Santa (Film)
    - Behind The Scenes
    - About
---

## CONTENTS

* [Features](#features)

* [User Experience](#user-experience-ux)

* [WIREFRAMING](#wireframing)

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Lighthouse](#lighthouse)
  * [WAVE](#wave)

* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

* [BUGS](#bugs)
  * [Known Bugs](#known-bugs)
  * [Solved Bugs](#solved-bugs)

---

## User Experience UX
---
    First time visitor Goals:

        * To quickly find out what Filmlab is up to, what the company is about and how they work together to produce films

        * To find out if filmlab is a legitimate business and their trackrecord with film making

        * To be able to navigate to the films section and watch the projects, possible after seeing potential advertiments or antisipation on social media for a new film

        * To find out information on the team behind filmlab, follow the carrers of actors involved, where the company is based, and to contact the company directly
    
    Frequent visitors:

        * To be able to navigate around and see the newest project & films, or upcoming projects on the very front of the homepage

        * To be able to see up to new images on the behind the scenes page, with new content about upcoming or completed projects, that they care about

---

## Design
---

* ### Wireframing
            
     * Navigation - The idea was to make the nav constantly visible on larger screen devices, but open with as a menu, for mobile users

        ![Navigation](assets/readme_img/wireframe(6).jpg)

    * Home - This needs an eyecatching first image, to keep users on the page, similar to how Netflix uses a main 

        ![Home](assets/readme_img/wireframe(7).jpg) ![Netfix Example](assets/readme_img/netfixhome.png)

    * Films - I tried to reuse the same elements from the homepage, to reduce the complexity of the project

        ![Films](assets/readme_img/wireframe(5).jpg)

    * Watch Films

        ![Watch film](assets/readme_img/wireframe(4).jpg)

    * Behind the Scenes - This will have all the images for projects, and will have a previous and next button, for interactability

        ![Behind the scenes](assets/readme_img/wireframe(1).jpg)

    * About Us - This will be a section for the directors and team to shine

        ![About us](assets/readme_img/wireframe(2).jpg)

    * Contact Form

        ![Contact form](assets/readme_img/wireframe(3).jpg)

 * ### Colour Scheme

    Originaly, I had planned to use a primary color scheme of black; purple, and a accent of orange to outline important content. However, Filmlabs' final colour scheme is heavily inspired by Netflix and their simple red, black and grey website design. 

    ![Contact form](assets/readme_img/netflixcolor.png) Colour scheme credits - https://www.color-hex.com/color-palette/22942

    Based on my previous statment and using the colour selector tools on Figma.com, the colours I decided to settle on were the following 3:

    ![color](assets/readme_img/color.png)



* ### Typography

    I used google fonts' "Quicksand" for better readability, as its roundness makes it easier to read. It also adds a more delicate and confortable feel, which is ideal for relaxing users, who are ready to watch a film.

* ### Consolidating the Design

    When working on the final design, I used an online editing tool called Figma. I also used it to edit and resize SVG images, due to its inbuilt features and high precision over such properties. This is how I redesigned my Icons.
        



Logo - Designed by a collegue for this project (Credit - Natsuko)









MOOOOVEEE MEEE!!! As a small company, to reduce the bandwith load on servers, videos are be hosted on other streaming platforms, such as youtube. 

---
### Features

* Logo - Clickable functionality, brings user to home page

    * PC - Visible on the top left of the webpage with the feature of always bringing the user to the homepage
        
        ![Pc Logo](assets/readme_img/pc_logo.png)

    * Mobile - Visible on the top right of the navigation bar

        ![Mobile Logo](assets/readme_img/mobile_logo.png)

* Navigation

    * Mobile Burger Menu - Located on the top left of the mobile navigation bar, clicking this will open the navigation menu. This element uses the mouse hover attribute

        ![Burger Icon](assets/readme_img/burger.png)

    * Mobile X Icon - Replacing the general position of the Burger Icon, clicking this will close the mobile/tablet navigation. This element uses the mouse hover attribute

        ![Side Pannel](assets/readme_img/x.png) 

    * Side Pannel - Containing 4 page links. A transparancy filter is applied to the active corresponding link, hovering also darkens corresponding elements

        ![Side Pannel](assets/readme_img/nav_items.png) 

    * Social Media Icons - Opens a new tab, using the "_blank" attribute 

        ![Social Links](assets/readme_img/social_icons.png)

        * Upon hovering, each link will transition into an animation to their corresponding colour (I.E. Purple for Instagram. Orange for Patrion. Red for Youtube. Blue for Tiktok) I achieved this effect by using a filter and adding a transition period on the hover psuedo-class

        ![Tiktok](assets/readme_img/nav_item_lightup.png)
        ![Instagram](assets/readme_img/insta.png)
        ![Youtube](assets/readme_img/yt.png)
        ![Patrion](assets/readme_img/patrion.png)

    All navbar information is located at the beggining of the body of each HTML folder. 
        
    When starting my project, my primary focus was on completing the navbar as it would be the most challenging part of my project. I would have to not only master the required media quiries to make it responsive on both mobile and desktop devices


If you want to add optional [shields.io](https://shields.io) badges to your README, I like to add them to this section.


👩🏻‍💻 View an example of a completed design section [here](https://github.com/kera-cudmore/earth-day-hackathon-2022#Design)


---
### Colour Scheme
---


### Typography

If you've imported fonts to use in your project, add some information about them here. You can include information like:

Why did you choose the font you have?
Is this an accessibly friendly font?
What weights have you included?

I also like to include an image of the fonts chosen as a reference.

[Google Fonts](https://fonts.google.com/) is a popular choice for importing fonts to use in your project, as it doesn't require you to download the fonts to use them.



### General features on each page

If there is a feature that appears on all pages of your site, include it here. Examples of what to include would the the navigation, a footer and a favicon.

I then like to add a screenshot of each page of the site here, i use [amiresponsive](https://ui.dev/amiresponsive) which allows me to grab an image of the site as it would be displayed on mobile, tablet and desktop, this helps to show the responsiveness of the site.

### Future Implementations

In the future I would like to implement a proper "contact us" form, instead of the slapdash method of opening the email app, which is in place now. I would also like to add animations to the project, for example, when the navbar opens or closes.  

### Accessibility

While I have not added aria-labels to enable screen readers to understand my webpage, I have ensured that my code is semantic enough and I have ensured there is adequate contrast for ideal readibility. 

### Languages Used

HTML, CSS & Javascript





---
## Testing


Jigsaw CSS Validation:
    
| Bug (class)   | Error  | Soloution & Result |
| :------------ |:---------------| :-----|
|.oneByOne|"Too many values or values are not recognized : 20px 1em"| By removing the additional "1em" nothing visible on the page changed |
|.inLine .mainTitle|"Value Error : text-align centre is not a text-align value : centre"|I fixed the typo of "center", however this still does not impact the webpage visually|
|.pcLogo |centre is not a align-items value : centre| This was tghe same issue as above, but once it was resolved, the effect was noticable, as the pc logo now sat in the middle of the nav-bar, as it was intended to|
|.navbar-nav|in is not a transition value : transform 0.4s ease in |I removed this because the code was meant to create a transition between the navbar sidepannel appearing and diappearing, however, it did not function in this way |

![Jigsaw CSS](assets/readme_img/jigsawcssvalidator1.png)

The following errors do not effect my code in any meaningful way and by removing this code, my website would loose featues. For example, code such as "-webkit-tap-highlight-color: transparent;" can have a positive effect on the webpage, such as removing the blue box when a button on mobile is clicked, improving mobile UX.

![Jigsaw CSS](assets/readme_img/jigsawcssvalidator.png)


W3C HTML Validation:

    * index.html

| Error | Soloution & Result |
| :-------- | :-----|
|Element ul not allowed as child of element ul in this context|I changed the "ul" to "li" and the error was resolved in all navigations across all my pages  |
|An img element must have an alt attribute, except under certain conditions |I added "alt" tags to each image element, to resolve this error |
|Element p6 not allowed as child of element section in this context |To resolve the issues of "p" child elements not being able to be held in "section" I changed the "p6" element to a "div" |

    * films.html

| Error | Soloution & Result |
| :-------- | :-----|
|a tag not nested correctly|I used a span to wrap the inner contents of the a attribute|
|Element summary not allowed as child of element div in this context | I changed the "summary" element to a "section" as it is considered more correct |
|Element h1 not allowed as child of element span in this context |I changed the h1 element to a div, as the h1  |
|Error involving "p" not being allowed as child of element span in this context| The "p" element cannot be a child of a "span" element. Instead, I swapped the more semantic elements with "span" elements, to reduce the amount of errors. However, as this caused spacing issues due to span being a block type element, I switched to using divs, similar to the home page film tiles|

    * about.html

| Error | Soloution & Result |
| :-------- | :-----|
| br not allowed as child of element ul |I removed all "br" tags which spaced out the "li", instead I added a new class to replace this function|
|Element summary not allowed as child of element section |I changed the semantic element to div|
|Issues of open tags, for example, the "main" tag was open, and so was "section"| I fixed it by finding where these tags opened, and closing them|

    * bts.html

| Error | Soloution & Result |
| :-------- | :-----|
| Attribute src not allowed on element button|Since src is not the correct element to apply to a button I applied the img tag instead |


    * Films section | Kidnapped |Killer Santa | Once Upon a Time

| Error | Soloution & Result |
| :-------- | :-----|
| Attribute src not allowed on element button|Since src is not the correct element to apply to a button I applied the img tag instead |
|The frameborder attribute on the iframe element is obsolete|Since the value of the item was 0, it was unnecesarry to include any further|
|Error from using "p5" as a child element for a "ul"|To counteract this I changed the child to "li" and targeted the new list items with the following properties "list-style: none; display: inline;" so they behave as they did before|
|Error: No li element in scope but a li end tag seen|Deleted surplus "li" tag|



Start as you mean to go on - and get used to writing a TESTING.md file from the very first project!

 however if you start using a TESTING.md file from your first project you will thank yourself later when completing your later projects, which will contain much more information.
  
Use this part of the README to link to your TESTING.md file - you can view the example TESTING.md file [here](testing.md)

## Credits

👩🏻‍💻 View an example of a completed Credits section [here](https://github.com/kera-cudmore/BookWorm#Credits)

Credits to Natsuko, the designer who helped me with the logo, and who was a big help in designing the site.

I used the filters [here](https://codepen.io/sosuke/pen/Pjoqqp) for allowing me to easily apply the right filter to make the hover effect animation on my svg work, with minimal trial and error.


### Code Used

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

### Content

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

If someone helped you out during your project, you can acknowledge them here! For example someone may have taken the time to help you on slack with a problem. Pop a little thank you here with a note of what they helped you with (I like to try and link back to their GitHub or Linked In account too). This is also a great place to thank your mentor and tutor support if you used them.

\sWhen working on Filmlab, I had issues with the javascript. Primarily with regards to adding a behind the scenes (bts.html) image carousel, with autoscroll dunctionality


## Getting Started: Wireframing my project:

Initially I had a completely different idea for the website. I had intended on using waves on the top for the navigation, with a more colourised aesthetic on the about us page.
    
I then designed it on Figma with these as the results
    
## Color and Styling


My design was started on pencil and paper -> then moved to figma as a free tool that I would be able to see my design before committing to it in code.

Upon finishing the design it had 3 major issues:

1- While commiting to the colour scheme, I wanted to remove elements that created visual noise, or affected readability for the user. I also wanted to cut down on colours outside of the primary colours (Grey & White)
![Colourised About us page](assets/img1.jpg)


### User Strories:

Investors who are lookinmg into the activities of the business.

* Investors
    As an investor I am looking for upcoming projects, the ability to see previous work, along with a description of who was involved.

    An investor would be most interested in the involvement of the producers in each project, along with their corresponding roles. This is easily accesible underneath the description of the film, where it describes.

    Note: -move to different section - fixes?
     while investors will have an inherant interest in contacting the company directly. To navigate to this section, there is one method. To go to the navigation bar, on the left. 
     
      This is easily accomplished through the "Contact us" hyperlink. However as this takes the user to another app, it has its flaws as a system

* Viewer
    As a viewer I am most interested in the films that Filmlab is creating. Navigation toward the films section is also therefore the most important feature for such a website. This would be the most important feature for a new company, looking to establish its audience


- - -
## Testing
---


All content is made by me Armando Halilaj, support resources I have used are:
    - stack overflow (other people's questions - e.g. understanding the scaling aspect-ratio of the Iframes of my videos)
    - w3schools
    - Youtube (Grid & flexbox)


about.html (Filmlan - About):

    Initially starting with a mobile-first approach, 
    
    Bugs:

        I had no issues here until I ran into problems with the ".bubble" class. I tried to fix this by having the background wrap more closely with the text, and aligning content with flex to the center of the box. This had fixed one issue but also left all of the bubbles as the same size, as can be seen in the image below:


Reason for my commit being later in the project:
     Initially when I started writing the code for this website, it was during the start of the course. During this period I had not learnt about github and was spending half my time working through the cirriculum, the other half was getting practical experience by writing unique-code on a project I am passionate about. Since I only learnt how to use Git later on in the project, I would only know how to commit my code once I reached that part in the course.





Bugs:
    Along my journey I had experienced a great number of bugs and unintended consequences in the user experience. This ranged from elements which did not display at all, to elements covering the entirety of the screen.

    #### Known bugs

    Some known bugs are ones involving...

    I have an issue with the display of the navigation, social media Icons appearing too far down on the pc versions. This was a problem I only noticed when testing with different viewport heights.

    Another issue I was unable to fix was, once I use navigation & swaps from tablet mode to pc mode. There the contents do not change their states back to its default. This 

    Inconsitent text displays between films.html and the corresponding film pages:

    The 
    