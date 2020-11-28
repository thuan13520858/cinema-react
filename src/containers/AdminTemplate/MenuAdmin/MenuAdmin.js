import Movies from "../Page/PageContent/Movies/Movies";
import Users from "../Page/PageContent/Users/Users";
import Ticket from "../Page/PageContent/Ticket/Ticket";

export const menu =  [
    {
        classIcon: 'fa fa-film',
        url: '/admin/movies',
        value: "movies",
        title: 'Movies',
        component: Movies
    },
    {
        classIcon: 'fa fa-user',
        url: '/admin/users',
        value: "users",
        title: 'Users',
        component: Users
    },
    {
        classIcon: 'fa fa-ticket-alt',
        url: '/admin/ticket',
        value: "ticket",
        title: 'Ticket',
        component: Ticket
    }
]