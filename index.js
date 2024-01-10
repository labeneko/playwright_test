setTimeout(() => {
    const h1 = document.createElement('h1');
    h1.innerText = 'ようこそPlaywrightテストページへ';
    document.body.appendChild(h1);
    const h2 = document.createElement('h2');
    h2.innerText = 'おすすめサイトのリンク';
    document.body.appendChild(h2);
    const ul = document.createElement('ul');
    ul.innerHTML = `<li><a href="https://www.nnn.ed.nico/">N予備校</a></li>
        <li><a href="https://zen-univ.jp/">ZEN大学</a></li>`
    document.body.appendChild(ul);
}, 5000);