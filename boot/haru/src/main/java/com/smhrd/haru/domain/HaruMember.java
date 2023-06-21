package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HaruMember {

	private String user_id;
	private String user_pw;
	private String user_gender;
	private String user_birthdate;
	private String user_joindate;
	private String user_type;
	private String sns_user_id;
	private String sns_user_name;
	private String sns_user_email;
	private String sns_user_age;
	private String sns_user_gender;

	public HaruMember(String user_type, String sns_user_id, String sns_user_name, String sns_user_email) {
		this.user_type = user_type;
		this.sns_user_id = sns_user_id;
		this.sns_user_name = sns_user_name;
		this.sns_user_email = sns_user_email;
	}

	public HaruMember(String user_type, String sns_user_id, String sns_user_name, String sns_user_email,
			String sns_user_age, String sns_user_gender) {
		this.user_type = user_type;
		this.sns_user_id = sns_user_id;
		this.sns_user_name = sns_user_name;
		this.sns_user_email = sns_user_email;
		this.sns_user_age = sns_user_age;
		this.sns_user_gender = sns_user_gender;
	}

}