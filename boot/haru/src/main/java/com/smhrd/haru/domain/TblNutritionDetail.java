package com.smhrd.haru.domain;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class TblNutritionDetail {
		
		private String nutri_name;
		private String nutri_effect;
		private String taking_guide;
		private String intake_unit;
		private String rec_intake;
		private String with_supplement;
		private String forbid_supplement;

}
