export interface MenuItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    role?: string;
    children?: MenuItem[];
}