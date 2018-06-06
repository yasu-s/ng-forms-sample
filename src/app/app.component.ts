import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

// #region fields

    /** タイトル */
    title = 'app';

// #endregion

// #region methods

    /**
     * クリックイベント
     */
    onClick(): void {
        alert('hoge');
    }

// #endregion

}
