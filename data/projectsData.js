import eight from '../assets/svg/projects/eight.svg'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Generic SearchMS',
        projectDesc: 'This project is about creating a generic search MS which consumes data from different sources and provides a generic search API to the client.',
        tags: ['Spring Boot', 'Kafka', 'ElasticSearch', 'Docker'],
        code: 'https://github.com/phaltankarvrushali/generic-searchms',
        image: six
    },
    {
        id: 2,
        projectName: 'User Management System',
        projectDesc: 'This project is a Spring boot based application which stores user and their products information and is deployed on AWS using GitHub Actions.',
        tags: ['Spring Boot', 'AWS', 'MySQL', 'Terraform'],
        code: 'https://github.com/phaltankarvrushali/webapp',
        image: seven
    },
    {
        id: 3,
        projectName: 'e-learning Application',
        projectDesc: 'This project about an elarning application which provides courses to the users and is built using ReactJS and Material UI.',
        tags: ['React', 'CSS', 'MongoDB', 'Material Ui'],
        code: 'https://github.com/phaltankarvrushali/eLearning_Application_ReactJS',
        image: eight
    },
    {
        id: 4,
        projectName: 'Notification service',
        projectDesc: 'This project is a notification microservice built in NodeJS and is used to Send notification to users through AWS SNS.',
        tags: ['NodeJS', 'AWS SNS'],
        code: 'https://github.com/phaltankarvrushali/notification-service',
        image: seven
    }
]