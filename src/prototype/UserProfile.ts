import { UserProfilePrototype } from "./UserProfilePrototype";

export type Department = "finance" | "engineering" | "marketing";

export type Permissions = {
	canEditUsers: boolean;
	canApproveBudget: boolean;
	canAccessInternalTools: boolean;
};

export class UserProfile implements UserProfilePrototype {
	public username: string;
	public department: Department;
	public permissions: Permissions;

	constructor(
		username: string,
		department: Department,
		permissions: Permissions
	) {
		this.username = username;
		this.department = department;
		this.permissions = { ...permissions };
	}

	public clone(): UserProfilePrototype {
		return new UserProfile(this.username, this.department, {
			...this.permissions,
		});
	}
}
