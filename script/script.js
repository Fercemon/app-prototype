const search = document.querySelector(".search");

search.addEventListener("click", openSearch);
var count = 1;
        function openSearch(){
            count++;

            if(count % 2 == 0){
            document.getElementById("searchBar").style.width="100%";
                }else{
                    document.getElementById("searchBar").style.width=0;
                }
        }
