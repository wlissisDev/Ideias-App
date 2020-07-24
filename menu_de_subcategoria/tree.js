export default function (data) {
    const tree = document.querySelector('nav#tree');

    //creando uma ul
    const menu = document.createElement('ul');

    //pegando os itens iniciais (null) que nao tem parent
    const firstLevel = data.filter(item => !item.parent);


    //pegando todos os itens retornados pela função builTree
    const getFirstLi = firstLevel.map(buildTree); // retorna novo array com li's
    getFirstLi.forEach(li => menu.append(li)); // adc li's ao menu

    //função que cria lista e adc os elementos
    function buildTree(item) {

        //criando item(elemento)
        const li = document.createElement('li');
        li.innerHTML = item.name;

        //comparando o Id com Parent para relacionar
        const children = data.filter(child => child.parent === item.id);

        //só executa isso se tiver filhos
        if(children.length > 0) {

            //adiciona um click para os parents
            li.addEventListener('click', event => {
                event.stopPropagation();
                event.target.classList.toggle('open');
            })

            //adiciona uma classe identificadora de que tem filho
            li.classList.add('has-children')

            //constro os filhos
            const subMenu = document.createElement('ul');

            //      ****************
            //faz a ****RECURSÂO**** da função buildTree para adc os elementos filhos 
            //      ****************
            children.map(buildTree)
            .forEach(li => subMenu.append(li));

            //submenu como um elemento de uma lista
            li.append(subMenu);

        }

     return li;

    }





    //colocando a Ul no tree
    tree.append(menu);

}