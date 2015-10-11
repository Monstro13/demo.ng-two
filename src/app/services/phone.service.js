import {phones} from 'app/services/phones/phones';

import {dell_streak_7} from 'app/services/phones/dell-streak-7';
import {dell_venue} from 'app/services/phones/dell-venue';
import {droid_2_global_by_motorola} from 'app/services/phones/droid-2-global-by-motorola';
import {droid_pro_by_motorola} from 'app/services/phones/droid-pro-by-motorola';
import {lg_axis} from 'app/services/phones/lg-axis';
import {motorola_bravo_with_motoblur} from 'app/services/phones/motorola-bravo-with-motoblur';
import {motorola_charm_with_motoblur} from 'app/services/phones/motorola-charm-with-motoblur';
import {motorola_defy_with_motoblur} from 'app/services/phones/motorola-defy-with-motoblur';
import {motorola_xoom} from 'app/services/phones/motorola-xoom';
import {motorola_xoom_with_wi_fi} from 'app/services/phones/motorola-xoom-with-wi-fi';
import {nexus_s} from 'app/services/phones/nexus-s';

class phoneService {
	constructor() {
		this.phones = {
			'dell-streak-7': dell_streak_7,
			'dell-venue': dell_venue,
			'droid-2-global-by-motorola': droid_2_global_by_motorola,
			'droid-pro-by-motorola': droid_pro_by_motorola,
			'lg-axis': lg_axis,
			'motorola-bravo-with-motoblur': motorola_bravo_with_motoblur,
			'motorola-charm-with-motoblur': motorola_charm_with_motoblur,
			'motorola-defy-with-motoblur': motorola_defy_with_motoblur,
			'motorola-xoom': motorola_xoom,
			'motorola-xoom-with-wi-fi': motorola_xoom_with_wi_fi,
			'nexus-s': nexus_s
		}
	};

	all() {
		return phones;
	};

	byId(id) {
		return this.phones[id];
	};
}

export {phoneService};