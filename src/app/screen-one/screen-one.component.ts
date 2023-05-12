import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.scss']
})
export class ScreenOneComponent implements OnInit , AfterViewInit {
  @ViewChild('arrow')arrow: ElementRef | undefined;
  
  ngAfterViewInit(): void {
  }

  footerData = [
    {
      heading: 'Company Info',
      list1: 'About Us',
      list2: 'Carrier',
      list3: 'We are hiring',
      list4: 'Blog'
    },

   {
      heading: 'Legal',
      list1: 'About Us',
      list2: 'Carrier',
      list3: 'We are hiring',
      list4: 'Blog'
    },
    {
      heading: 'Features',
      list1: 'Business Marketing',
      list2: 'User Analytic',
      list3: 'Live Chat',
      list4: 'Unlimited Support'
    },
    {
      heading: 'Resources',
      list1: 'IOS & Android',
      list2: 'Watch a Demo',
      list3: 'Customers',
      list4: 'API'
    },
    {
      heading: 'Get In Touch',
      list1: '(480) 555-0103',
      list2: '4517 Washington Ave. Manchester Kentucky 39495',
      list3: 'debra.holt@example.com',
      list4: ''

    },
  ]
  carousel = [
    {
      name: 'Julian Jameson',
      prof: 'Profession',
      img: 'assets/images/user-cover-1.png'
    },
    {
      name: 'Julian Jameson',
      prof: 'Profession',
      img: 'assets/images/user-cover-2.png'
    },
    {
      name: 'Julian Jameson',
      prof: 'Profession',
      img: 'assets/images/user-cover-3.png'
    },
    {
      name: 'Julian Jameson',
      prof: 'Profession',
      img: 'assets/images/user-cover-4.png'
    },

  ]
  error = false;
  
  ngOnInit(): void {
  }

  onHover(){
    let el = this.arrow?.nativeElement;
    el.setAttribute('style', 'margin-left: 5px');
  }

  onHoverOut(){
    let el = this.arrow?.nativeElement;
    el.removeAttribute('style');
  }

  onSubscribe(value:any){
    if(!(value.includes('.') && value.includes('@') && value.includes('com'))){
      this.error = true;
    }
  }

  onChange(){
    this.error = false;
  }
}
