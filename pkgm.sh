#!/bin/bash
# how to use? => curl -fsSL https://www.nyanthu.com/pkgm.sh | bash

# 静かに失敗したら即終了
set -e

# OS検出
case "$(uname -s)" in
    Linux*)     OS=Linux;;
    Darwin*)    OS=Mac;;
    CYGWIN*|MINGW*|MSYS*) OS=Windows;;
    *)          OS="Unknown"
esac

# JARファイル名
JAR_NAME="pkgm_v1.jar"
JAR_URL="https://www.nyanthu.com/app.jar"

# 出力抑制付きダウンロード関数
download() {
    if command -v curl >/dev/null 2>&1; then
        curl -fsSL -o "$JAR_NAME" "$JAR_URL" >/dev/null 2>&1
    elif command -v wget >/dev/null 2>&1; then
        wget -q -O "$JAR_NAME" "$JAR_URL" >/dev/null 2>&1
    else
        echo "Error: curl or wget not found."
        exit 1
    fi
}

# 実行
download
echo "java -jar $JAR_NAME to use"
java -jar "$JAR_NAME" >/dev/null 2>&1
