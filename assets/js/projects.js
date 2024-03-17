$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mes.png',
            link: 'https://github.com/Kuan29/Maple-Earning-System-master',
            title: '넥슨 api를 사용한 검색시스템',
            technologies: ['python', 'vue,js', 'MariaDB'],
            description: "넥슨api를 사용하여 메이플 캐릭터 검색 시스템을 구현중 2023/12/31 ~ .",
            categories: ['featured']
        },
        {
            image: 'assets/images/face.png',
            link: 'https://github.com/Kuan29/face_recognition',
            title: '얼굴인식 도어락',
            technologies: ['Java', 'Python'],
            description: "라즈베리파이와 어플리케이션을 무선통신하고 라즈베리파이와 아두이노를 시리얼통신하여 제어하는 얼굴인식 도어락입니다.",
            categories: ['featured']
        },
        {
            image: 'assets/images/na-chat.png',
            link: 'https://github.com/Kuan29/chat_app/blob/master/README.md',
            title: '채팅어플',
            technologies: ['Java'],
            description: "2022년 3학년때 개인프로젝트로 한학기동안 만든것으로 realtimedatabase를 이용하여 채팅 삭제 및 자동삭제를 구현하였습니다..",
            categories: ['featured']
        },
        {
            image: 'assets/images/diet.png',
            link: 'https://github.com/Kuan29/Kuan',
            title: '다이어트 어플',
            technologies: ['Java', 'Kotlin'],
            description: "대학교2학년때 만든 프로젝트로 다이어트 어플로서 만보계, 달력 기능을 가지고 있습니다.",
            categories: ['featured']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
