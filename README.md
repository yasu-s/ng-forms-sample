# Angular CLI サンプル

## npmスクリプト一覧

<table>
<tr>
  <th>スクリプト</th>
  <th>概要</th>
</tr>
<tr>
  <td>build</td>
  <td>ソースコードをビルドします。</td>
</tr>
<tr>
  <td>start:bs</td>
  <td>
    browser-sync で起動します。<br>  
    ソースコードの変更を監視して、ビルドも実行します。
  </td>
</tr>
<tr>
  <td>test</td>
  <td>単体テストを実行します。</td>
</tr>
<tr>
  <td>test:headless</td>
  <td>
    単体テストを実行します。(CI用)<br>  
    JUnit形式のテスト結果ファイルを ./reports/test-results.xml に出力します。<br>  
    コードカバレッジについても ./reports/coverage ディレクトリに出力します。  
  </td>
</tr>
<tr>
  <td>lint</td>
  <td>TSLintを実行します。</td>
</tr>
<tr>
  <td>lint:output</td>
  <td>
    TSLintを実行します。(CI用)<br>   
    TSLintの結果を ./reports/tslint-result.json に出力します。
  </td>
</tr>
</table>