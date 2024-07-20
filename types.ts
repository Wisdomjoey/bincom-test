export interface Agent {
	name_id: number;
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	pollingunit_uniqueid: number;
	polling_unit?: PollingUnit | null;
}

export interface LGAResult {
	result_id: number;
	lga_id: number;
	party_score: number;
	party_abbreviation: string;
	entered_by_user?: string | null;
	user_ip_address?: string | null;
	date_entered: Date;
}

export interface PUResult {
	result_id: number;
	polling_unit_uniqueid: number;
	party_score: number;
	party_abbreviation: string;
	entered_by_user?: string | null;
	user_ip_address?: string | null;
	date_entered: Date;
}

export interface LGA {
	uniqueid: number;
	lga_id: number;
	lga_name: string;
	lga_description?: string | null;
	entered_by_user?: string | null;
	date_entered: Date;
	user_ip_address?: string | null;
	state_id: number;
	state?: State | null;
	wards?: Ward[] | null;
}

export interface Party {
	id: number;
	partyid: string;
	partyname: string;
}

export interface PollingUnit {
	uniqueid: number;
	polling_unit_id: number;
	uniquewardid: number;
	lga_id: number;
	lat: number;
	long: number;
	polling_unit_number: string;
	polling_unit_name: string;
	polling_unit_description?: string | null;
	entered_by_user?: string | null;
	user_ip_address?: string | null;
	date_entered: Date;
	ward_id: number;
	ward?: Ward | null;
	agents?: Agent[] | null;
}

export interface State {
	state_id: number;
	state_name: string;
	lgas?: LGA[] | null;
}

export interface Ward {
	uniqueid: number;
	ward_id: number;
	ward_name: string;
	ward_description?: string | null;
	entered_by_user?: string | null;
	user_ip_address?: string | null;
	date_entered: Date;
	lga_id: number;
	lga?: LGA | null;
	polling_units?: PollingUnit[] | null;
}
