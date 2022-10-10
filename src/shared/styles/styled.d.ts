import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        color: {
            primary: string;
            secondary: string;
            text: string;
            beelegal: string;
            primary10: string;
            primary50: string;
        };
    }
}
