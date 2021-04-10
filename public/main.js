let n = 1;


addCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "style.css");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response);
                const style = document.createElement('style')
                style.innerHTML = request.response;
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }

    };
    request.send();
};

addJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js")
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert('加载js失败')
            }
        }
    };
    request.send();
}
addHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html")
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载html失败')
            }
        }
    };
    request.send();
}
addXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim());
        }
    };
    request.send();
}
addJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const Object = JSON.parse(request.response)
            myName.textContent = Object.name
        }
    };
    request.send();
}
nextPage.onclick = () => {
    const request = new XMLHttpRequest();
    if (n < 3) {
        n = n + 1;
    } else {
        console.log("没有下一页啦~");
    }
    request.open("GET", `/page${n}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id;
                xxx.appendChild(li);
            });
        }
    };
    request.send();
}