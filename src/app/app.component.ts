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

    /**  */
    num = 2;

// #endregion

// #region methods

    /**
     * クリックイベント
     */
    onClick(): void {
        alert('hoge');
    }

    /**
     * 変更イベント
     * @param value
     */
    change(value: string): void {
        console.log(`change - ${value}`);
    }

// #endregion

}
