import { FormGroup, FormControl, Validators } from "@angular/forms";

export class EventForm {
    constructor() {

    }
    sepNewEvent: FormGroup = new FormGroup({
        eventId: new FormControl(0, Validators.required),
        eventCode: new FormControl("NOCODE", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
        eventName: new FormControl("NOCODE", Validators.required),
        description: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        fees: new FormControl(0),
        seatsFilled: new FormControl(0, [Validators.min(0), Validators.max(100)])
    });
}
