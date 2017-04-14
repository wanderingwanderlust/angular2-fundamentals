import {Component} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";
@Component({
    templateUrl: 'app/events/event-detail/event-detail.component.html'
})
export class EventDetailsComponent {
    event:any

    constructor(private eventService:EventService,
                private route:ActivatedRoute){

    }
    ngOnInit() {
        this.event = this.eventService.getEvent(
            +this.route.snapshot.params["id"]
        );
    }
}