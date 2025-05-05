import { fetchData } from "./utils/api.js";


let filePath = "./json/posts.json"; // Path to your JSON file
let linkPath = "./json/about.json";
let referencePath = "./json/reference.json" // Path to your JSON file
let mainTitle = document.getElementsByTagName("title");
const postsContainer = document.getElementById("posts-container");
const aboutLink = document.getElementById("about-link");
const referenceLink = document.getElementById("reference-link");
const windowContent = document.getElementById("window-content");
const hero = document.getElementById("hero-image");

aboutLink.addEventListener("click", function () {
    filePath = linkPath; // Path to your JSON file
    loadPosts(filePath);
    windowContent.innerHTML = `Něco málo o mně - &#128512; <span class="text-dark">./About ? </span>`; // Change the content of the window
    scrollToContent(); // Scroll to the content
    mainTitle.textContent = "About"; // Change the title of the page
    console.log("About link clicked, loading posts from:", filePath, 'title is:', mainTitle.textContent);
});

referenceLink.addEventListener("click", function () {
    filePath = referencePath; // Path to your JSON file
    loadPosts(filePath);
    windowContent.innerHTML = `Něco málo referencí &#129300; <span class="text-dark">./Refence ? </span>`; // Change the content of the window
    scrollToContent();
    mainTitle.textContent = "Reference"; // Change the title of the page
    console.log("Reference link clicked, loading posts from:", filePath, 'title is:', mainTitle.textContent);
});

function scrollToContent() {
    scrollY = 100;
    window.scrollTo(0, scrollY); // Scroll to the content
    console.log("Navbar closed, scrolled to:", scrollY);
}

function loadPosts(filePath) {
    fetchData(filePath)
        .then((data) => {
            console.log("Data načtena v pořádku:", data);
            let heroImage = "./media/wide_home.webp";
            let postsLength = data.posts.length;

            let allPost = [] // Select the first post element
            let titles = [];
            let postContent = [];
            let titleElement = []; // Create a new h2 element for the title
            for (let i = 0; i < postsLength; i++) {
                titleElement[i] = document.getElementsByClassName(`title-${i}`);
                allPost[i] = document.getElementsByClassName(`post-${i}`);
                titles[i] = data.posts[i].title;
                postContent[i] = data.posts[i].content;

                titleElement[i][0].classList.add("text-center", "text-bg-dark");
                allPost[i][0].classList.add("text-center", "text-bg-light");
                titleElement[i][0].innerHTML = titles[i];
                allPost[i][0].innerHTML = postContent[i] + " - &#129299;";

                //  postsContainer.innerHTML += `${titleElement[i][0].innerHTML = ""}` + "solved &#129300;!&#128512;";
                if (filePath == referencePath) {
                    titleElement[i][0].classList.remove("text-bg-dark");
                    windowContent.classList.remove("text-bg-dark");
                    windowContent.classList.add("text-bg-info");
                    titleElement[i][0].classList.add("text-bg-info");
                    heroImage = "./media/lucky_jump_w.webp";
                    document.getElementById("h-image").style.backgroundImage = `url(${heroImage})`;
                

                }
                if (filePath == linkPath) {
                    titleElement[i][0].classList.remove("text-bg-dark");
                    windowContent.classList.remove("text-bg-dark");
                    windowContent.classList.add("text-bg-primary");
                    windowContent.classList.remove("text-bg-info");
                    titleElement[i][0].classList.remove("text-bg-info");
                    titleElement[i][0].classList.add("text-bg-primary");
                    heroImage = "./media/pustina_w.webp";
                    document.getElementById("h-image").style.backgroundImage = `url(${heroImage})`;
                }
                 console.log(postsContainer.innerHTML)

            }

            console.log(postsContainer);

        });


}

window.onload = function () {
    loadPosts(filePath);
}
