import { MatToolbarModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContainerComponent } from "./container.component";
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe("ContainerComponent", () => {
    let component: ContainerComponent;
    let fixture: ComponentFixture<ContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContainerComponent],
            imports: [
                CommonModule,
                RouterTestingModule,
                MatToolbarModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
