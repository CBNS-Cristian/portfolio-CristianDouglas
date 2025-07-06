// Código base para a animação e interação em escolher os cursos complementares e base do currículo.  
export default function formacao(){
    const areaCursos = document.querySelectorAll('.formacao-extra ol');
    const h3Cursos = document.querySelectorAll('.formacao-extra h3');
    const setaCurso = document.querySelectorAll('.formacao-extra span');

    h3Cursos.forEach((item, index)=>{
        item.addEventListener('click', (event) =>{
            areaCursos.forEach((area)=>{
                area.classList.remove('curso-ativo')
            })
            setaCurso.forEach((seta)=>{
                seta.classList.remove('curso-seta-ativo')
            })
            const tituloAtual = areaCursos[index]
            const setaAtual = setaCurso[index]
            setaAtual.classList.toggle('curso-seta-ativo');
            tituloAtual.classList.toggle('curso-ativo')
        })
    });
}