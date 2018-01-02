import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import {ChatService} from './service/chat-service';
import { AppComponent } from './app.component';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { PostToActiveChatComponent } from './post-to-active-chat/post-to-active-chat.component';
import { HttpModule } from '@angular/http';
import { MessageComponent } from './message/message.component';
//import {Ng2EmojifyModule} from './ng2-emojify';


import {CommonModule} from '@angular/common';
import {Ng2EmojifyComponent} from "./ng2-emojify/lib/ng2-emojify.component";
import {EmojifyPipe} from './ng2-emojify/lib/emojify.pipe';
import {MenuDataService} from "./ng2-emojify/lib/services/menu-data.service";
import {EmotionService} from "./ng2-emojify/lib/services/emotion.service";
import {CustomEmotionService} from "./ng2-emojify/lib/services/custom-emotion.service";
import { EmotionMenuDirective } from './ng2-emojify/lib/emotion-menu.directive';
import { EmojiComponent } from './emoji/emoji.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ActiveUserComponent,
    PostToActiveChatComponent,
    MessageComponent,
    Ng2EmojifyComponent,
    EmojifyPipe,
    EmotionMenuDirective,
    EmojiComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [ChatService,
    MenuDataService,
    EmotionService,
    CustomEmotionService
  ],

  exports:[
    EmotionMenuDirective,
    EmojifyPipe,
    Ng2EmojifyComponent
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
