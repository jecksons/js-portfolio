import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
    en: {
        translation: {
            'javascript-engineer': 'JavaScript software engineer and solution provider via software',
            'first-note': 'Developing software solutions since 2008, I worked leading a lot of projects, mainly linked to the industries, always supporting these companys to reach out their final goal sucessfully. Afterwards, the focus always is on the client business.',
            'who-i-am':'Who I Am',
            'my-projects':'My Projects',
            'about-me': 'About Me',
            'about-me-text': 'Sou observado por meus pares por ser um qualificado profissional e altamente comprometido com o negócio do cliente. \n\nPor não ser apenas um desenvolvedor de software e sim um provedor de soluções, entendo que o software é um elemento do negócio, e não o objeto final dos meus esforços. Portanto, dentre as etapas de desenvolvimento de soluções, gosto de me aprofundar nas regras de negócio do cliente para entender não o que eu quero e nem o que o cliente quer, mas sim o que ele realmente precisa.\n\nComo características profissionais, posso elencá-las como sendo:',
            'self-manageable': 'Auto-gerenciável',
            'best-practices': 'Comprometido com as melhores práticas de desenvolvimento',
            'inovational': 'Inovador, sempre que possível',
            'accessible': 'Acessível, seja para dúvidas técnicas ou sobre regras de negócio',
            'focused': 'Extremamente focado',
            'easy-learning': 'Uma pessoa com facilidade de aprendizagem',
            'solution-builder': 'Solution Builder',
            'solution-builder-text': 'Me caracterizo por trabalhar em todas as etapas da produção de soluções via software, desde a identificação do problema/melhoria até a entrega final. Para melhor exemplificar, os passos podem ser listados em:',
            'solution-identify': 'Identificação do problema/melhoria',
            'solution-solving': 'Elaboração de possíveis resoluções e análise de oportunidades que essas soluções podem trazer',
            'solution-prototype': 'Prototipação da solução em proximidade com o cliente, com aprovação do mesmo',
            'solution-development': 'Desenvolvimento da solução',
            'solution-tests': 'Testes internos e homologação com o cliente',
            'solution-delivery': 'Entrega da solução efetivamente',
            'solution-post-delivery': 'Acompanhamento pós entrega para identificar possíveis oportunidades de melhoria futura',
            'tech-leader': 'Líder técnico do setor de desenvolvimento',
            'framework-building': 'Criação de frameworks de desenvolvimento',
            'constant-inovation': 'Inovações constantes no principal produto da empresa',
            'maintenance-products': 'Manutenção, design de produto e melhorias nos produtos da empresa',
            'tech-planning': 'Planejamento e definição de tecnologias a serem utilizadas',
            'acting-stacks': 'Atuação constante nas três esferas de produto da empresa, Desktop, Mobile e Web',
            'software-engineer': 'Software Engineer',
            'sep-15-dec-21': 'set de 2015 - dez de 2021 - 6 anos e 3 meses',
            'analyst-developer': 'Analista programador',
            'may-10-ago-15': 'mai de 2010 - ago de 2015 - 5 anos e 4 meses',
            'dev-own-software': 'Desenvolvimento e melhorias no software próprio',
            'sap-integration': 'Integrações com ERP SAP',
            'process-improvement': 'Análise e melhoria de processos sistêmicos e não sistêmicos',
            'dba-services': 'Serviços de DBA Oracle',
            'nov-2009-mai-2010': 'nov de 2009 - mai de 2010 - 7 meses',
            'dev-mechanical': 'Análise e desenvolvimento software automação engenharia mecânica',
            'automation-g-code': 'Automações para geração de código G',
            'sigmanest': 'Integrações com software SigmaNEST',
            'jun-2009-nov-2009': 'jun de 2009 - nov de 2009 - 6 meses',
            'delphi-outsource': 'Desenvolvimento de software em Delphi na modalidade de outsourcing',
            'jan-2008-jun-2009': 'jan de 2008 - jun de 2009 - 1 ano e 6 meses',
            'dev-maintenance-delphi': 'Análise e desenvolvimento de software de manutenção em Delphi',
            'ago-20-now': 'ago de 2020 - atual',
            'maintenance-management-solutions': 'Criação de soluções web e mobile no segmento de gestão de manutenção',
            'institutional-websites': 'Criação de sites institucionais',
            'plantation-solution': 'Análise, design e implementação de solução mobile para o segmento do agronegócio',
            'home': 'Home',
            'experience': 'Experiência',
            'work-together': `Let's work together?`,
            'contact': 'Contact'
        }
    },
    pt: {
        translation: {
            'javascript-engineer': 'Engenheiro de software Javascript e provedor de soluções via software',
            'first-note': 'Desenvolvedor de soluções de software desde 2008, trabalhei liderando vários projetos, principalmente ligado à indústrias, sempre auxiliando essas companhias no alcance do objetivo final com pleno sucesso, afinal, o foco sempre está no negócio do cliente.',
            'who-i-am':'Quem sou eu',
            'my-projects':'Meus projetos',
            'about-me': 'Sobre mim',
            'about-me-text': 'Sou observado por meus pares por ser um qualificado profissional e altamente comprometido com o negócio do cliente. \n\nPor não ser apenas um desenvolvedor de software e sim um provedor de soluções, entendo que o software é um elemento do negócio, e não o objeto final dos meus esforços. Portanto, dentre as etapas de desenvolvimento de soluções, gosto de me aprofundar nas regras de negócio do cliente para entender não o que eu quero e nem o que o cliente quer, mas sim o que ele realmente precisa.\n\nComo características profissionais, posso elencá-las como sendo:',
            'self-manageable': 'Auto-gerenciável',
            'best-practices': 'Comprometido com as melhores práticas de desenvolvimento',
            'inovational': 'Inovador, sempre que possível',
            'accessible': 'Acessível, seja para dúvidas técnicas ou sobre regras de negócio',
            'focused': 'Extremamente focado',
            'easy-learning': 'Uma pessoa com facilidade de aprendizagem',
            'solution-builder': 'Solution Builder',
            'solution-builder-text': 'Me caracterizo por trabalhar em todas as etapas da produção de soluções via software, desde a identificação do problema/melhoria até a entrega final. Para melhor exemplificar, os passos podem ser listados em:',
            'solution-identify': 'Identificação do problema/melhoria',
            'solution-solving': 'Elaboração de possíveis resoluções e análise de oportunidades que essas soluções podem trazer',
            'solution-prototype': 'Prototipação da solução em proximidade com o cliente, com aprovação do mesmo',
            'solution-development': 'Desenvolvimento da solução',
            'solution-tests': 'Testes internos e homologação com o cliente',
            'solution-delivery': 'Entrega da solução efetivamente',
            'solution-post-delivery': 'Acompanhamento pós entrega para identificar possíveis oportunidades de melhoria futura',
            'tech-leader': 'Líder técnico do setor de desenvolvimento',
            'framework-building': 'Criação de frameworks de desenvolvimento',
            'constant-inovation': 'Inovações constantes no principal produto da empresa',
            'maintenance-products': 'Manutenção, design de produto e melhorias nos produtos da empresa',
            'tech-planning': 'Planejamento e definição de tecnologias a serem utilizadas',
            'acting-stacks': 'Atuação constante nas três esferas de produto da empresa, Desktop, Mobile e Web',
            'software-engineer': 'Software Engineer'
        }
    }
}


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;    