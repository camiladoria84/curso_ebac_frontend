
const endPoint = `https://api.github.com/users/camiladoria84`;
    
function fetchDataAndSetInnerText() {
    
    fetch(endPoint)
        .then(function(res) {
            if (!res.ok) {
                throw new Error('Erro na API: ${res.status}');
            }
            return res.json();
        })

        .then(json => {
            $('#name').text(json.name);
            $('#username').text(json.login);
            $('#avatar').attr("src", json.avatar_url);
            $('#repos').text(json.public_repos);
            $('#followers').text(json.followers);
            $('#following').text(json.following);
            $('#link').attr("href", json.html_url);  
        })

        .catch(function(erro) {
            alert("Erro ao buscar os dados Json");
        })

        .finally(function() {
            console.log("Requisiçao finalizada.");
        });
}

$(document).ready(() => {
    fetchDataAndSetInnerText();
});







