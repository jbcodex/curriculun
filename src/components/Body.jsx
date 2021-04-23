/* eslint-disable import/no-anonymous-default-export */
import '../styles/styles.css';
import React from 'react';

import Skills from './subComponents/Skills';
import Experience from './subComponents/Experience';

export default function() {
    return (
        <div className='NewBody'>
            <div className='BodyColl1'>
                <div className='Tittle'>
                    <p>Skills</p>
                </div>
                <div className='SkillsStyle'>
                    <Skills className='Skill'/>
                    <Experience />
                </div>
            </div>
            <div className='BodyColl2'>
                <div className='Tittle'>
                    <p>Experience</p>
                </div>
                <div className='ExperienceStyle'>
       
                <strong> &gt;&gt; Formação</strong>
                <p>
                Graduando Segurança da informação UNIASELVI - 2021 <br/><hr/>
                Obtendo a certificação <strong>DCPT</strong> pela Desec Security baseada em desenvolvimento de aplicações seguras
                </p>
                
                <strong className='StrongExp'>&gt;&gt;Cursos na area de desenvolvimento</strong>
                <p>HTML/CSS - VueJS - JavaScript - NodeJS - PHP 7 - React Native - MongoDB</p>

                <strong className='StrongExp'>&gt;&gt;Cursos na area Segurança da informação</strong>
                <p>Python - Python para Hackers - Pentest - Wifi pentest - Ubuntu - Kali</p>

                <strong className='StrongExp'>&gt;&gt;Observações</strong>
                <p>Busco estágio ou cargo na area de desenvolvimento Front-end baseado em Framework React ou VueJS</p>
               
               
                <strong className='StrongExp'>&gt;&gt;Pretensões</strong>
                   
                    <p>Como possuo ampla experiência em HTML e CSS, agora focado em Frameworks como React e VueJS, optor em por em prática toda a experiência
                        adquirida ao longo de mais de 10 anos como Frontend buscando atuar em vaga ou estágio.
                    </p>  

                    <strong className='StrongExp'>&gt;&gt;Qualidades</strong>
                   
                    <p>Alta capacidade de abstração, dinâmismo e facilidade de trabalho em equipe.
                    </p>   
                </div>
            </div>
        </div>
    )
}