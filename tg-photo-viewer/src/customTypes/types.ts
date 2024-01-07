type Target = '' | '_blank';
export interface NavbarProps {
	data: { id: string, url: string, label: string }[];
};
export interface FooterProps {
	data: { year: number, url: string, label: string, target?: Target };
};
