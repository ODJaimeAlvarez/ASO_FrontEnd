import { Component } from "@angular/core";
import { MenuItem } from "src/app/models/menu.item";
import { MenuService } from "src/app/service/menu.service";
import { TokenService } from '../service/token.service';

const parentPath = "dashboard";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    /*{
      // displayName: 'Métrica Lab',
      // iconName: 'emoji_objects',
      // children: [
      //   {
      displayName: "Usuarios",
      iconName: "person",
      //   }
      // ]
    },*/
    {
      displayName: "Usuarios",
      iconName: "account_circle",
      children: [
        {
          displayName: "Gestión de usuarios",
          iconName: "assignment_ind",
          route: "users/management",
        },
      ],
    },

    {
      displayName: "Gestion Lab",
      iconName: "bookmarks",
      children: [
        {
          displayName: "Exámenes",
          iconName: "description",
          route: "exams",
        },
        {
          displayName: "Ediciones",
          iconName: "school",
          route: "editions",
        },
        {
          displayName: "Programa formativo",
          iconName: "psychology",
          route: "program",
        },
        {
          displayName: "Escuelas",
          iconName: "home_work",
          route: "schools",
        },
        {
          displayName: "Alumnos",
          iconName: "contact_page",
          route: "students",
        },
        {
          displayName: "Tutores",
          iconName: "emoji_people",
          route: "tutors",
        },
      ],
    },
    {
      displayName: "Colaboradores",
      iconName: "person",
      children: [
        {
          displayName: "Gestión de colaboradores",
          iconName: "manage_accounts",
          route: "/collaborators",
        },
      ],
    },
    {
      displayName: "Gestión WelcomeLab",
      iconName: "miscellaneous_services",
      children: [
        {
          displayName: "Organigrama",
          iconName: "schema",
          route: "/ranks",
        },
        {
          displayName: "Contactos",
          iconName: "chrome_reader_mode",
          route: "/contact",
        },
        {
          displayName: "Resumen de proyectos",
          iconName: "list",
          route: "/projects",
        },
        {
          displayName: "Gráficas",
          iconName: "leaderboard",
          route: "/graph",
        },
        {
          displayName: "Información microservicios",
          iconName: "info",
          route: "/microservice",
        },
      ],
    },
  ];
}
