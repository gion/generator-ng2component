import { Component, OnInit } from '@angular/core'<%if(put_service != null){%>
<%-put_service%><%}%>

@Component({
  selector: 'my-<%=folder_name %>',
  template: require('./<%=folder_name %>.component.html'),
  styles: [require('./<%=folder_name %>.component.<%=style_suffix %>')],<%if(put_service != null){%>
  providers: [ <%=service_class_full %> ],<%}%>
})
export class <%=class_name %> implements OnInit {
  constructor(<%if(put_service != null){%>public <%=service_instance%>: <%=service_class_full %><%}%>) {
  }

  ngOnInit() {
    // tslint:disable-next-line:no-console
    console.log('Hello from <%=folder_name %> component!')
  }
}
