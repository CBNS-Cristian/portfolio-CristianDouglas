// Código JavaScript para alterar o tema Dark e Light, permitindo a troca interativa na página. 
export default function tema(){
    const icon = document.querySelector('#icon-tema img');
    const attTema = document.querySelector("[data-tema='dark']");

    icon.addEventListener('click', ()=>{
        attTema.setAttribute('data-tema', 'light')
    });
    
}